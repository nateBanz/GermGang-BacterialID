import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import MainIndex from "./MainIndex";
import LoginPage from "./LoginPage";
import RestrictedPage from "./RestrictedPage";
import OnlyTeacher from "./OnlyTeacher";
import OnlyStudent from "./OnlyStudent";

export const Content = ({ user }) => {
  return (
    <>
      <Switch>
        <Route exact path="/index" component={MainIndex} />
        {user.isSignedIn && (
          <Route exact path="/restricted" component={RestrictedPage} />
        )}
        {user.role === "teacher" && (
          <Route exact path="/only-teacher" component={OnlyTeacher} />
        )}
        {user.role === "student" && (
          <Route exact path="/only-student" component={OnlyStudent} />
        )}
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.userReducer
});

export default connect(
  mapStateToProps,
  null
)(Content);