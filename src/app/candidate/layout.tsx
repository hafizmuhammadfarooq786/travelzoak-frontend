'use client';
import Sidebar from '@/components/sidebar';
import Topbar from '@/components/topbar';
import { CandidatePaths } from '@/constants/UrlConstants';
import CandidateController from '@/controllers/CandidateController';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  const { authenticatedUser } = useSelector((state: any) => state.authReducer);
  const { candidate } = useSelector((state: any) => state.candidateReducer);
  const [publicLayout, setPublicLayout] = useState<boolean>(false);
  const candidateController = new CandidateController(dispatch);

  useEffect(() => {
    if (pathname === CandidatePaths.Profile) {
      setPublicLayout(true);
    } else {
      setPublicLayout(false);
    }

    async function fetchCandidate() {
      const response = await candidateController.getCandidateByEmail(
        authenticatedUser.email,
      );
      if (response) {
        router.push(CandidatePaths.Jobs);
      } else {
        router.push(CandidatePaths.Profile);
      }
    }

    if (candidate) {
      if (candidate) {
        router.push(CandidatePaths.Jobs);
      } else {
        router.push(CandidatePaths.Profile);
      }
    } else if (authenticatedUser) {
      fetchCandidate();
    }
  }, [pathname]);

  return publicLayout ? (
    <div className="flex flex-1 flex-col justify-center w-screen h-full bg-white min-h-screen h-full w-screen overflow-y-scroll">
      <div className="flex w-full h-full min-h-full flex-col justify-start items-center p-8">
        {children}
      </div>
    </div>
  ) : (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Topbar />
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
