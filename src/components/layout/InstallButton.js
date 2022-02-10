import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Button = styled.button`
    width: 200px;
    height: 40px;
    display: none;
    justify-content: center;
    gap: 5px;
    align-items: center;
    background-color: var(--primary);
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    color: var(--white);
    font-size: 13px;
    border: none;
    @media (min-width: 750px) {
      width: 250px;
      height: 50px;
      font-size: 16px;
    }
    
`;

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
        const installApp = document.getElementById("installApp");
        installApp.style.display = "flex";
        setDeferredPrompt(e)
    });
  }, []);

  const onClick = async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            setDeferredPrompt(null);
        }
    }
  }

  return (
    <Button
      type="button"
      onClick={onClick}
      id="installApp"
    >
      Instalar app!
      <i className="fas fa-download"></i>
    </Button>
  );
};

export default InstallButton;