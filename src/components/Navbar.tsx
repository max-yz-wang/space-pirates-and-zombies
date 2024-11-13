// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { Context, useContext } from '../context';
// import { apiRequest } from '../helpers';

// const Navbar: React.FC = () => {
//   const { getters, setters } = useContext(Context);
//   const navigate = useNavigate();
//   const handleLogout = async () => {
//     const res = await apiRequest('user/auth/logout', 'POST', {}, getters.token);
//     if (res.error) {
//       console.log('logout error');
//     } else {
//       localStorage.removeItem('token');
//       localStorage.removeItem('email');
//       setters.setToken('');
//       setters.setEmail('');
//       navigate('/');
//     }
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <Box
//             display="flex"
//             flexBasis={'row'}
//             justifyContent={'space-around'}
//           >
//             <Button
//               id="listings-button"
//               variant="text"
//               color="secondary"
//               onClick={() => {
//                 navigate('/listings');
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 component="div"
//                 sx={{ flexGrow: 1 }}
//               >
//                 AirBrB
//               </Typography>
//             </Button>
//           </Box>
//           <Box
//             display="flex"
//             flexBasis={'row'}
//             justifyContent={'flex-end'}
//             sx={{ flexGrow: 1 }}
//           >
//             {!getters.token ? (
//               <div>
//                 <div>
//                   <Button
//                     id="login-button"
//                     color="inherit"
//                     onClick={() => {
//                       navigate('/login');
//                     }}
//                   >
//                     Login
//                   </Button>
//                   <Button
//                     id="register-button"
//                     data-cy="register-button"
//                     color="inherit"
//                     onClick={() => {
//                       navigate('/register');
//                     }}
//                   >
//                     Register
//                   </Button>
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 <Button
//                   id="dashboard-button"
//                   color="inherit"
//                   onClick={() => {
//                     navigate('/dashboard');
//                   }}
//                 >
//                   Dashboard
//                 </Button>
//                 <Button
//                   id="logout-button"
//                   color="inherit"
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </Button>
//               </div>
//             )}
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };

// export default Navbar;
