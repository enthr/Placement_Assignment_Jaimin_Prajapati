import { lazy, Suspense } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const GitHubIcon = lazy(() => import('@mui/icons-material/GitHub'));

const Footer = () => {
	const link = 'https://github.com/enthr/';

	return (
		<footer>
			<Box sx={{ width: '95%', marginX: 'auto' }}>
				<Divider />
				<Stack direction='row' justifyContent='space-between' alignItems='center'>
					<Typography variant='h6'>Developed By Jaimin 👍</Typography>
					<Link href={link} target='_blank'>
						<Button size='large' color='inherit' startIcon={<Suspense fallback={<div>Loading...</div>}><GitHubIcon /></Suspense>}>
							GitHub
						</Button>
					</Link>
				</Stack>
			</Box>
		</footer>
	);
};

export default Footer;