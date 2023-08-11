import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/searchSlice";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const searchValue = useSelector(state => state.search.searchValue);
  const dispatch = useDispatch();

  const handleSearchChange = e => {
    const newValue = e.target.value;
    dispatch(setSearchValue(newValue));
  };

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MYDMovie
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <MenuItem className="menu-item">
                <NavLink
                  className="nav-link"
                  onClick={handleCloseNavMenu}
                  // to="/populer"
                >
                  Popular
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  className="nav-link"
                  onClick={handleCloseNavMenu}
                  // to="/top-rated"
                >
                  Top Rated
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  className="nav-link"
                  onClick={handleCloseNavMenu}
                  // to="/upcoming"
                >
                  Upcoming
                </NavLink>
              </MenuItem>
              <TextField
                label="Search"
                color="info"
                size="small"
                onChange={handleSearchChange}
                value={searchValue}
                sx={{ width: 150, margin: 1 }}
              />
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MYDMovie
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button>
              <NavLink className="nav-link large" to="/">
                Popular
              </NavLink>
            </Button>
            <Button>
              <NavLink className="nav-link large" to="/">
                Top Rated
              </NavLink>
            </Button>
            <Button>
              <NavLink className="nav-link large" to="/">
                Upcoming
              </NavLink>
            </Button>
            <TextField
              label="Search"
              color="info"
              size="small"
              onChange={handleSearchChange}
              value={searchValue}
              sx={{ width: 150 }}
            />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="MuCoder" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(setting => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
