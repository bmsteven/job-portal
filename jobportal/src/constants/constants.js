const screens = {
  main_layout: "MainLayout",
  home: "Home",
  loader: "Loader",
  onBoarding: "OnBoarding",
  signIn: "SignIn",
  signUp: "SignUp",
  forgot_password: "ForgotPassword",
  jobs: "Jobs",
  companies: "Companies",
}

const bottom_tabs = [
  {
    id: 0,
    label: screens.home,
  },
  {
    id: 1,
    label: screens.jobs,
  },
  {
    id: 2,
    label: screens.companies,
  },
]

export default {
  screens,
  bottom_tabs,
}
