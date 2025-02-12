import React, { createContext, ReactNode } from 'react';
import { storage } from '@/lib/firebaseConfig';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';

interface FirebaseStorageContextProps {
  getImageUrl: (imagePath: string) => Promise<string>;
  uploadImage: (filePath: string, fileBlob: Blob) => Promise<string>;
}

// Create Firebase Storage Context
export const FirebaseStorageContext =
  createContext<FirebaseStorageContextProps | null>(null);

export const FirebaseStorageProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const getImageUrl = async (imagePath: string): Promise<string> => {
    try {
      const imageRef = ref(storage, imagePath);
      return await getDownloadURL(imageRef);
    } catch (error) {
      console.error('Error fetching image URL:', error);
      throw error;
    }
  };

  const uploadImage = async (
    filePath: string,
    fileBlob: Blob
  ): Promise<string> => {
    try {
      const storageRef = ref(storage, filePath);
      await uploadBytes(storageRef, fileBlob);
      return getDownloadURL(storageRef);
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  return (
    <FirebaseStorageContext.Provider value={{ getImageUrl, uploadImage }}>
      {children}
    </FirebaseStorageContext.Provider>
  );
};
