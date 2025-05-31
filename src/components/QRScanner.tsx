
import React, { useState } from 'react';
import { QrCode, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QRScannerProps {
  onVerified: () => void;
}

const QRScanner: React.FC<QRScannerProps> = ({ onVerified }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleScanClick = () => {
    setIsScanning(true);
    
    // Simulate QR code scanning and verification process
    setTimeout(() => {
      setIsVerified(true);
      setTimeout(() => {
        onVerified();
      }, 1000);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="relative">
        <div className={`
          w-64 h-64 border-4 border-dashed border-gray-300 rounded-lg 
          flex items-center justify-center transition-all duration-500
          ${isScanning ? 'border-blue-500 animate-pulse' : ''}
          ${isVerified ? 'border-green-500 bg-green-50' : ''}
        `}>
          {!isVerified ? (
            <QrCode 
              size={120} 
              className={`
                text-gray-400 transition-all duration-300
                ${isScanning ? 'text-blue-500 scale-110' : ''}
              `} 
            />
          ) : (
            <CheckCircle 
              size={120} 
              className="text-green-500 animate-bounce" 
            />
          )}
        </div>
        
        {isScanning && !isVerified && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-1 bg-blue-500 animate-pulse rounded"></div>
          </div>
        )}
      </div>

      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          {!isScanning && !isVerified && "Scan QR Code"}
          {isScanning && !isVerified && "Scanning..."}
          {isVerified && "Verified!"}
        </h2>
        
        <p className="text-gray-600">
          {!isScanning && !isVerified && "Click the button below to simulate QR code scanning"}
          {isScanning && !isVerified && "Verifying your QR code..."}
          {isVerified && "QR code verified successfully"}
        </p>

        {!isScanning && !isVerified && (
          <Button 
            onClick={handleScanClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Start Scanning
          </Button>
        )}
      </div>
    </div>
  );
};

export default QRScanner;
