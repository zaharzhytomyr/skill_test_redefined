import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
    Box,
  } from "@material-ui/core";
  import MenuIcon from "@material-ui/icons/Menu";
  import React, {useState, useEffect, useContext} from "react";
  import {Link as RouterLink, useHistory} from "react-router-dom";
import {UserContext} from "../../context/user/userContext";
import {SVGContainer} from "../index";
import {Logout} from "../../assets";
import axios from "axios";

  const headersData = [
    {
        label: "News",
        href: "/news",
    },
    {
        label: "Challenges",
        href: "/challenges",
    },
    {
        label: "Practice",
        href: "/practice",
    },
    {
        label: "Skill test",
        href: "/skill-test",
    },
    {
        label: "Events",
        href: "/events",
    },
  ];

  const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "rgba(40, 50, 160, 1)",
        position: 'relative',
        flexDirection: 'row',
        "@media (max-width: 1024px)": {
            paddingLeft: 0,
            flexDirection: 'column',
        },
    },
    logoutBtn: {
        width: 26,
        height: 26,
        '&:hover': {
            cursor: 'pointer',
        }
    },
    container: {
        maxWidth: 1300,
        width: '100%',
        margin: '0 auto',
        padding: '0 20px',
    },
    logo: {
        textTransform: 'uppercase',
        fontSize: 23,
        textDecoration: 'none',
        cursor: 'pointer',
        color: 'white',
        marginRight: 10,
        fontWeight: 'bold',
        padding: 0,
        '&:hover': {
            textDecoration: 'none',
        }
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        fontSize: 16,
        borderRadius: 0,
        padding: 20,
    },
    loginButton: {
        padding: '10px 15px',
        backgroundColor: 'rgba(255, 99, 102, 1)',
        borderRadius: 5,
        transition: '2s',
        '&:hover':{
            backgroundColor: 'rgba(255, 99, 102, 1)',
            color: 'white'
        }
    },
    loginMobile: {
      marginTop: 5,
      borderRadius: 5,
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    drawerContainer: {
        padding: "50px 30px",
    },
  }));

  export default function Header() {
    const { header, container,  logo, menuButton, loginButton, logoutBtn, loginMobile, toolbar, drawerContainer } = useStyles();

    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });

    const history = useHistory();
    const { mobileView, drawerOpen } = state;
    const {getAuthUser} = useContext(UserContext)
    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 1024
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };

      setResponsiveness();

      window.addEventListener("resize", () => setResponsiveness());

      return () => {
        window.removeEventListener("resize", () => setResponsiveness());
      };
    }, []);

    const displayDesktop = () => {
      return (
        <Toolbar className={`${container} ${toolbar}`}>
            <Box className={toolbar}>
                {logoItem({color: 'white', onClick: ()=>{}})}
                <div>{getMenuButtons()}</div>
            </Box>
             {getLogin({isMobile: false, onClick: ()=>{}})}
        </Toolbar>
      );
    };

    const handleLogout = () => {
        axios.post('/logout').then(
            (response) => {
                if (response.status === 204) {
                    history.push("/");
                    getAuthUser()
                }
            }
        )
    }

    const getLogin = ({isMobile, onClick}) => {
        const {user, getAuthUser} = useContext(UserContext)
        const styles = useStyles()

        return (
                <>
                    {user && Object.keys(user).length ? (
                        <div style={{
                                display: "flex",
                                alignItems: "center",
                             }}
                        >
                            <p style={{
                                margin: 0,
                                marginBottom: 7,
                                paddingRight: 10,

                            }}>{user.name}</p>
                            <SVGContainer onClick={handleLogout}  source={Logout} className={logoutBtn} />
                        </div>
                        ) : (
                            <Button
                                {...{
                                    color: "inherit",
                                    to: "/log-in",
                                    component: RouterLink,
                                    onClick: onClick,
                                    className: `${menuButton} ${isMobile ? loginMobile : loginButton} `,
                                }}
                            >
                                log in/sign up
                            </Button>
                        )

                    }
                </>

        )
    }

    const displayMobile = () => {
      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));

      return (
        <Toolbar className={toolbar}>
          <div>{logoItem({color: 'white', onClick: handleDrawerClose})}</div>

          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            {...{
              anchor: "right",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={drawerContainer}>{getDrawerChoices(handleDrawerClose)}</div>
          </Drawer>

        </Toolbar>
      );
    };

    const getDrawerChoices = (handleDrawerClose) => {
      return (
          <>
            {logoItem({color: 'blue', onClick: handleDrawerClose})}
            <Box style={{marginTop: 20}}>
                {headersData.map(({ label, href }) => {
                    return (
                    <Link
                        {...{
                        component: RouterLink,
                        to: href,
                        color: "inherit",
                        style: { textDecoration: "none" },
                        onClick: handleDrawerClose,
                        key: label,
                        }}
                    >
                        <MenuItem>{label}</MenuItem>
                    </Link>
                    );
                })}
            </Box>
            {getLogin({isMobile: true, onClick: handleDrawerClose})}
        </>
      );
    };

    const logoItem = ({color, onClick}) => {
        return (
            <Link
                {...{
                color: "inherit",
                to: "/",
                component: RouterLink,
                className: logo,
                onClick,
                style:{color: color},
                }}
            >
                Code<span style={{color: 'rgba(255, 99, 102, 1)'}}>Interview</span>
            </Link>

        );
    }

    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,
            }}
          >
            {label}
          </Button>
        );
      });
    };

    return (
      <header>
        <AppBar className={header}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
    );
  }
