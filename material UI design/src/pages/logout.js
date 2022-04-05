import { useRouter } from 'next/router';
import { Typography } from '@mui/material';

const Logout = () => {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    localStorage.removeItem("active");
    router.push("/login");
  }

  return (
    <Typography
    align="center"
    variant="body1"
    >
        Logging out...
    </Typography>
  );
};

export default Logout;
