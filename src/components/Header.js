import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button component={Link} to="/" color="inherit">
          {t("home")}
        </Button>
        <Button component={Link} to="/about" color="inherit">
          {t("about")}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
