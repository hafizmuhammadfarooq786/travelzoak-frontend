export const Text = {
  Empty: '',
  SignIn: 'Sign In',
  SignUp: 'Sign Up',
  TourPlanners: 'Tour Planners',
  VerifiedPartners: 'Verified Partners',

  // Portal
  SendMagicLink: 'Send Magic Link',
  ResendMagicLink: 'Resend Magic Link',
  MagicLinkVerification: 'Please hold on, System is verifying Magic link ...',
  EmailAddress: 'Email Address',
  Logout: 'Logout',
  Edit: 'Edit',
  Details: 'Details',
  Apply: 'Apply',
  Applied: 'Applied',
  Cancel: 'Cancel',
  Save: 'Save',
  SaveChanges: 'Save Changes',
  Delete: 'Delete',
};

// Hero Banner
export const Banner = {
  heroImage:
    'https://images.unsplash.com/photo-1633595726913-68e037dff159?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"',

  cards: [
    {
      name: 'Swat',
      count: 10,
      imageSrc:
        'https://res.cloudinary.com/farooq-storage/image/upload/v1719070195/swat_uervue.jpg',
      slug: 'swat',
    },
    {
      name: 'Hunza',
      count: 10,
      imageSrc:
        'https://res.cloudinary.com/farooq-storage/image/upload/v1719070244/hunza_nbybif.jpg',
      slug: 'hunza',
    },

    {
      name: 'Skardu',
      count: 10,
      imageSrc:
        'https://res.cloudinary.com/farooq-storage/image/upload/v1719070179/skardu_ffwqse.jpg',
      slug: 'skardu',
    },
    {
      name: 'Kashmir',
      count: 20,
      imageSrc:
        'https://res.cloudinary.com/farooq-storage/image/upload/v1719071060/kashmir_wf6rnk.jpg',
      slug: 'kashmir',
    },
  ],
};

export enum FormType {
  Email = 'email',
  Otp = 'otp',
}

export enum ButtonStatus {
  Active = 'Active',
  Inactive = 'InActive',
}

export enum PopupStatus {
  Open = 'Open',
  Close = 'Close',
}

export const GetButtonStatus = (isTrue: boolean) => {
  return isTrue ? ButtonStatus.Active : ButtonStatus.Inactive;
};

export enum AuthStatus {
  Error = 'error',
}

export enum Icon {
  Active = 'ActiveIcon',
  InActive = 'InActiveIcon',
}
