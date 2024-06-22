import { AdminPaths, CandidatePaths } from '@/constants/UrlConstants';
import { ButtonStatus, Text } from '@/constants/appConstants';
import { CandidatePortalcolors } from '@/constants/colorConstants';
import AuthController, { UserRoles } from '@/controllers/AuthControllers';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from './button';

const adminMenuItems = [
  { id: 1, label: 'Candidates', route: AdminPaths.Candidates },
  { id: 2, label: 'Applicants', route: AdminPaths.Applicants },
  { id: 3, label: 'Job Postings', route: AdminPaths.JobPostings },
  { id: 4, label: 'Feedback Forms', route: AdminPaths.FeedbackForms },
  { id: 5, label: 'Forms', route: AdminPaths.Forms },
  { id: 6, label: 'Interview Teams', route: AdminPaths.InterviewTeams },
];

const candidateMenuItems = [
  { id: 3, label: 'Job Opening', route: CandidatePaths.Jobs },
];

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.authReducer);
  const authController = AuthController(dispatch, auth, router);
  const [sideNavLinks, setSideNavLinks] = useState<any[]>([]);

  const sideBarStyle = {
    width: '250px',
    minWidth: '250px',
    backgroundColor: CandidatePortalcolors.White,
    borderRight: `2px solid ${CandidatePortalcolors.SidebarBorderGray}`,
  };

  const sideBarTextContainer = {
    cursor: 'pointer',
    padding: '5px 0px',
    borderRadius: '8px',
  };

  const onMenuItemClicked = (e: any, item: any) => {
    if (!item.route) {
      return;
    }
    router.push(item.route);
  };

  const handleClick = async () => {
    setLoader(true);
    await authController.onLogout();
    setLoader(false);
  };

  useEffect(() => {
    if (auth) {
      const user = auth.authenticatedUser;
      if (user.role.name === UserRoles.Candidate.toLowerCase()) {
        setSideNavLinks(candidateMenuItems);
      } else {
        setSideNavLinks(adminMenuItems);
      }
    }
  }, []);

  return (
    <div className="flex flex-col justify-start" style={sideBarStyle}>
      <div className="flex flex-col p-10 justify-center">
        {sideNavLinks.length &&
          sideNavLinks.map((item: any) => (
            <div
              key={item.id}
              onClick={(e: any) => onMenuItemClicked(e, item)}
              style={sideBarTextContainer}
              className="flex my-2 text-start"
            >
              <p
                className="text-md"
                style={{
                  fontWeight: pathname.includes(item.route ? item.route : '')
                    ? '600'
                    : 'normal',
                  color: pathname.includes(item.route ? item.route : '')
                    ? CandidatePortalcolors.Black
                    : CandidatePortalcolors.SidebarFontColor,
                }}
              >
                {item.label}
              </p>
            </div>
          ))}

        <div className="flex absolute bottom-5 left-0 mx-2">
          <Button
            buttonStatus={ButtonStatus.Active}
            onClick={handleClick}
            width="230px"
            height="48px"
            borderRadius="5px"
            cursor="pointer"
            buttonText={Text.Logout}
            loading={loader}
            loaderHeight={32}
            loaderWidth={32}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
