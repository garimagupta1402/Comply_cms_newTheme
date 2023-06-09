import { Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import Loader from "react-loaders";

import { ToastContainer } from "react-toastify";

// const UserPages = lazy(() => import("../../DemoPages/UserPages"));
// const Applications = lazy(() => import("../../DemoPages/Applications"));
// const Dashboards = lazy(() => import("../../DemoPages/Dashboards"));
// const Login = lazy(() => import("../../DemoPages/UserPages/Login"));
// const ForgetPassword = lazy(() => import("../../DemoPages/UserPages/ForgotPassword"));
// const Register = lazy(() => import("../../DemoPages/UserPages/Register"));
// const Widgets = lazy(() => import("../../DemoPages/Widgets"));
// const Elements = lazy(() => import("../../DemoPages/Elements"));
const Pages = lazy(() => import("../../Administrator/Pages/Pages"));
const Pages_details = lazy(() => import("../../Administrator/Pages/Page_details"));
const Content = lazy(() => import("../../Administrator/Content/Content"));
const Content_details = lazy(() => import("../../Administrator/Content/Content_details"));
const Agents = lazy(() => import("../../Administrator/Agents/Agents"));
const Agents_details = lazy(() => import("../../Administrator/Agents/Agent_details"));
const Easy = lazy(() => import("../../Administrator/Easy/Easy_help"));
const Easy_details = lazy(() => import("../../Administrator/Easy/Easy_details"));
const Form_type = lazy(() => import("../../Administrator/Form_type/Forms"));
const FormType_details = lazy(() => import("../../Administrator/Form_type/Form_details"));
const Phrases = lazy(() => import("../../Administrator/Phrases/Phrases"));
const Phrases_details = lazy(() => import("../../Administrator/Phrases/Phrases"));
const Lob = lazy(() => import("../../Administrator/Lob/Lob"));
const Lob_details = lazy(() => import("../../Administrator/Lob/lob_details"));


const UserManagement = lazy(() => import("../../Pages/UserManagement/UserManagement"));

// const AddUser = lazy(() => import("../../Pages/UserManagement/AddUser"));
// const MyAccount = lazy(() => import("../../Pages/MyAccount/myAccount"));
// const Components = lazy(() => import("../../DemoPages/Components"));
// const Charts = lazy(() => import("../../DemoPages/Charts"));
// const Forms = lazy(() => import("../../DemoPages/Forms"));
// const Tables = lazy(() => import("../../DemoPages/Tables"));


const AppMain = () => {

    return (
        <Fragment>

<Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all Users
                            {/* <small>Because this is a demonstration we load at once all the Elements examples. This wouldn't happen in a real live app!</small> */}
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/pages" component={Pages}/>
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all Users
                            {/* <small>Because this is a demonstration we load at once all the Elements examples. This wouldn't happen in a real live app!</small> */}
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/page_details" component={Pages_details}/>
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all Users
                            {/* <small>Because this is a demonstration we load at once all the Elements examples. This wouldn't happen in a real live app!</small> */}
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/content" component={Content}/>
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all Users
                            {/* <small>Because this is a demonstration we load at once all the Elements examples. This wouldn't happen in a real live app!</small> */}
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/content_details" component={Content_details}/>
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all Users
                            {/* <small>Because this is a demonstration we load at once all the Elements examples. This wouldn't happen in a real live app!</small> */}
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/agent" component={Agents}/>
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all Users
                            {/* <small>Because this is a demonstration we load at once all the Elements examples. This wouldn't happen in a real live app!</small> */}
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/agent_details" component={Agents_details}/>
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all Users
                            {/* <small>Because this is a demonstration we load at once all the Elements examples. This wouldn't happen in a real live app!</small> */}
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/easy_help" component={Easy}/>
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all Users
                            {/* <small>Because this is a demonstration we load at once all the Elements examples. This wouldn't happen in a real live app!</small> */}
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/easy_details" component={Easy_details}/>
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all Users
                            {/* <small>Because this is a demonstration we load at once all the Elements examples. This wouldn't happen in a real live app!</small> */}
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/phrases" component={Phrases}/>
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all Users
                            {/* <small>Because this is a demonstration we load at once all the Elements examples. This wouldn't happen in a real live app!</small> */}
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/phrases_details" component={Phrases_details}/>
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all Users
                            {/* <small>Because this is a demonstration we load at once all the Elements examples. This wouldn't happen in a real live app!</small> */}
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/form_type" component={Form_type}/>
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all Users
                            {/* <small>Because this is a demonstration we load at once all the Elements examples. This wouldn't happen in a real live app!</small> */}
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/form_type_details" component={FormType_details}/>
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all Users
                            {/* <small>Because this is a demonstration we load at once all the Elements examples. This wouldn't happen in a real live app!</small> */}
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/lob_details" component={Lob_details}/>
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all Users
                            {/* <small>Because this is a demonstration we load at once all the Elements examples. This wouldn't happen in a real live app!</small> */}
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/lob" component={Lob}/>
            </Suspense>

            {/* Components */}

            {/* <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-pulse-rise"/>
                        </div>
                        <h6 className="mt-5">
                            Please wait while we load all the Components examples
                            <small>Because this is a demonstration we load at once all the Components examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/components" component={Components}/>
            </Suspense> */}

            {/* Forms */}

            {/* <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-pulse-rise"/>
                        </div>
                        <h6 className="mt-5">
                            Please wait while we load all the Forms examples
                            <small>Because this is a demonstration we load at once all the Forms examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/forms" component={Forms}/>
            </Suspense> */}

            {/* Charts */}

            {/* <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-rotate"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all the Charts examples
                            <small>Because this is a demonstration we load at once all the Charts examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/charts" component={Charts}/>
            </Suspense> */}

            {/* Tables */}

            {/* <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-pulse-rise"/>
                        </div>
                        <h6 className="mt-5">
                            Please wait while we load all the Tables examples
                            <small>Because this is a demonstration we load at once all the Tables examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/tables" component={Tables}/>
            </Suspense> */}

            {/* Elements */}

            {/* <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all the Elements examples
                            <small>Because this is a demonstration we load at once all the Elements examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/elements" component={Elements}/>
            </Suspense> */}

            {/* Dashboard Widgets */}

            {/* <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-pulse-sync"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all the Dashboard Widgets examples
                            <small>Because this is a demonstration we load at once all the Dashboard Widgets examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/widgets" component={Widgets}/>
            </Suspense> */}

            {/* Login */}
{/* 
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale-party"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/forget-password" component={ForgetPassword}/>
            </Suspense> */}

            

            {/* Applications */}

            {/* <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-pulse"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all the Applications examples
                            <small>Because this is a demonstration we load at once all the Applications examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/apps" component={Applications}/>
            </Suspense> */}

            {/* Dashboards */}

            {/* <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-grid-cy"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all the Dashboards examples
                            <small>Because this is a demonstration, we load at once all the Dashboards examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/dashboards" component={Dashboards}/>
            </Suspense> */}
            {/* User Management */}
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all Users
                            {/* <small>Because this is a demonstration we load at once all the Elements examples. This wouldn't happen in a real live app!</small> */}
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/user-management" component={UserManagement}/>
            </Suspense>
            {/* My Account */}
            {/* <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale-party"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all data
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/my-account" component={MyAccount}/>
            </Suspense> */}

                {/* Add User*/}
                {/* <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load 
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/add-user" component={AddUser}/>
                <Route path="/edit-user/:id" component={AddUser}/>
            </Suspense> */}
            <Route exact path="/" render={() => (
                <Redirect to="/user-management"/>
            )}/>
            <ToastContainer/>
        </Fragment>
    )
};

export default AppMain;
