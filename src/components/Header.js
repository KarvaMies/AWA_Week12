import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Button component={Link} to="/" color="inherit">
          {t("Home")}
        </Button>
        <Button component={Link} to="/about" color="inherit">
          {t("About")}
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Button onClick={()=> changeLanguage("fi")} color="inherit">FI</Button>
        <Button onClick={()=> changeLanguage("en")} color="inherit">EN</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
