import React, { useState } from "react";
import SecretCode from "./components/SecretCode";
import FirstScreen from "./components/FirstScreen";
import FinalScreen from "./components/FinalScreen";
import Letters from "./components/Letters";
import "./App.css";
import GiftCards from "./components/GiftCards";
import HugOverlay from "./components/HugOverlay";
import RestartOverlay from "./components/RestartOverlay";
import Confession from "./components/Confession";
import VoiceCard from "./components/VoiceCard";
import LetterSwiper from "./components/LetterSwiper";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("firstscreen");
  const [showHugOverlay, setShowHugOverlay] = useState(false);
  const [showRestartOverlay, setShowRestartOverlay] = useState(false);

  const handleRestart = () => {
    setCurrentScreen("firstscreen")
    setShowHugOverlay(false)
    setShowRestartOverlay(false)
  }

  const handleHugClose = () => {
    setShowHugOverlay(false)
    setShowRestartOverlay(true)
  }

  return (
    <div className="app">
      <div>
        {currentScreen === "firstscreen" && (
          <FirstScreen onNext={() => setCurrentScreen("confession")} />
        )}

        {currentScreen === "confession" && (
          <Confession onComplete={() => setCurrentScreen("secret")} />
        )}

        {currentScreen === "secret" && (
          <SecretCode onUnlock={() => setCurrentScreen("letterswiper")} />
        )}

        {currentScreen === "letter" && (
          <Letters onNext={() => setCurrentScreen("giftcards")} />
        )}

        {currentScreen === "letterswiper" && (
          <LetterSwiper onNext={() => setCurrentScreen("giftcards")} />
        )}

        {currentScreen === "giftcards" && (
          <GiftCards onNext={() => setCurrentScreen("voicecard")} />
        )}

        {currentScreen === "voicecard" && (
          <VoiceCard onNext={() => setCurrentScreen("finalscreen")} />
        )}

        {currentScreen === "finalscreen" && (
          <FinalScreen onNext={() => setShowHugOverlay(true)} />
        )}

        <HugOverlay show={showHugOverlay} onClose={handleHugClose} />
        <RestartOverlay show={showRestartOverlay} onRestart={handleRestart} />
      </div>
    </div>
  );
}
