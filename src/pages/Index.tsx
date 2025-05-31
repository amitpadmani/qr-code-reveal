
import React, { useState } from 'react';
import QRScanner from '@/components/QRScanner';
import DataDisplay from '@/components/DataDisplay';

const Index = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = () => {
    setIsVerified(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            QR Code Verification System
          </h1>
          <p className="text-gray-600 text-lg">
            Secure access through QR code verification
          </p>
        </div>

        <div className="flex justify-center">
          {!isVerified ? (
            <QRScanner onVerified={handleVerification} />
          ) : (
            <DataDisplay />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
