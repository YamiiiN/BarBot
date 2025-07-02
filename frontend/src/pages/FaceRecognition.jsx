import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/FaceRecognition.css'; 

const FaceRecognition = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isRecognizing, setIsRecognizing] = useState(false);
  const [hasCamera, setHasCamera] = useState(false);

  useEffect(() => {
    startCamera();
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 640 },
          height: { ideal: 480 }
        } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setHasCamera(true);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      setHasCamera(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  const handleRecognizeFace = () => {
    setIsRecognizing(true);
    // Simulate face recognition process
    setTimeout(() => {
      setIsRecognizing(false);
      navigate('/drinks');
    }, 3000);
  };

  const handleRegister = () => {
    // Simulate registration process
    setTimeout(() => {
      navigate('/drinks');
    }, 1000);
  };

  return (
    <div className="face-recognition">
      <div className="face-recognition-container">
        <div className="face-recognition-content">
          <div className="camera-section">
            <div className="camera-frame">
              {hasCamera ? (
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="camera-video"
                />
              ) : (
                <div className="camera-placeholder">
                  <div className="face-outline">
                    <div className="face-circle">
                      <div className="face-features">
                        <div className="eye left-eye"></div>
                        <div className="eye right-eye"></div>
                        <div className="mouth"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="frame-corners">
                <div className="corner top-left"></div>
                <div className="corner top-right"></div>
                <div className="corner bottom-left"></div>
                <div className="corner bottom-right"></div>
              </div>
              
              {isRecognizing && (
                <div className="recognition-overlay">
                  <div className="scanning-line"></div>
                  <div className="recognition-text">Recognizing...</div>
                </div>
              )}
            </div>
          </div>
          
          <div className="info-section">
            <div className="barbot-logo">Barbot</div>
            
            <p className="instruction-text">
              Please position your face within the frame and look directly at the camera for recognition.
            </p>
            
            <div className="action-buttons">
              <button 
                className="btn btn-secondary recognize-btn"
                onClick={handleRecognizeFace}
                disabled={isRecognizing}
              >
                {isRecognizing ? 'RECOGNIZING...' : 'RECOGNIZE FACE'}
              </button>
              
              <button 
                className="btn btn-primary register-btn"
                onClick={handleRegister}
                disabled={isRecognizing}
              >
                REGISTER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;