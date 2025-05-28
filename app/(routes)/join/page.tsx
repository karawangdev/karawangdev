'use client';

import { useState } from 'react';
import JoinHeroSection from '@/app/components/join/JoinHeroSection';
import JoinExplanationStep from '@/app/components/join/JoinExplanationStep';
import JoinCodeOfConductStep from '@/app/components/join/JoinCodeOfConductStep';
import JoinCommunityStep from '@/app/components/join/JoinCommunityStep';
import JoinStepper from '@/app/components/join/JoinStepper';

export default function JoinPage() {
    const [processStarted, setProcessStarted] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [hasAgreed, setHasAgreed] = useState(false);

    const handleStartProcess = () => {
        setProcessStarted(true);
    };

    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const handleAgree = (agreed: boolean) => {
        setHasAgreed(agreed);
    };

    return (
        <>
            {!processStarted ? (
                <JoinHeroSection onStartProcess={handleStartProcess} />
            ) : (
                <>
                    <JoinStepper activeStep={activeStep} />

                    {activeStep === 0 && (
                        <JoinExplanationStep onNext={handleNext} />
                    )}

                    {activeStep === 1 && (
                        <JoinCodeOfConductStep
                            onNext={handleNext}
                            onAgree={handleAgree}
                            hasAgreed={hasAgreed}
                        />
                    )}

                    {activeStep === 2 && (
                        <JoinCommunityStep />
                    )}
                </>
            )}
        </>
    );
}