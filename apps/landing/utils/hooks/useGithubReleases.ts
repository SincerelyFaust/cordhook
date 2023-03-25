import useSWR, { SWRResponse } from "swr";
import { Releases } from "../../types/types";

export const useGithubReleases = () => {
  const { data, error }: SWRResponse<Releases, Error> = useSWR(
    "https://api.github.com/repos/sincerelyfaust/cordhook/releases",
  );

  return {
    releases: data,
    isLoading: !error && !data,
    isError: error,
  };
};
