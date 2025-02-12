import { useState, useEffect } from 'react';
import { storage } from '@/lib/firebaseConfig';
import { ref, getDownloadURL } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const useProfilePicture = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
          throw new Error('User not authenticated');
        }

        // Use the GS URL method that we know works
        const gsUrl = `gs://brain-battle-d367d.firebasestorage.app/users/${user.uid}/avatar.jpg`;
        const gsRef = ref(storage, gsUrl);

        const imageUrl = await getDownloadURL(gsRef);
        setUrl(imageUrl);
      } catch (error) {
        console.error('Error fetching profile picture:', error);
        setUrl(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfilePicture();
  }, []);

  return { url, loading };
};

export default useProfilePicture;
