import { useNavigate } from "react-router-dom";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
type TimelineItem = {
  title: string;
  message: string;
};
import { Spinner } from "./Spinner";
import { useEffect, useState } from "react";
import { useAddress } from "@thirdweb-dev/react";
import { converter } from "../utils/converter";
import Timeline from "./TimelineItem";
export const Events = () => {
  const navigate = useNavigate();
  const [loadingData, setLoadingData] = useState(false);
  const address: string = useAddress() as string;
  const [timelineData, setTimeLineData] = useState<any[]>([]);
  const QueryURL =
    "https://api.studio.thegraph.com/query/41629/ces/version/latest";
  const client = new ApolloClient({
    uri: QueryURL,
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    if (address) {
      const query = `
        query CESQuery($userAddress: String!) {
          issuranceVCIssueds(where: {user: $userAddress}) {
            id
            transactionHash
            user
            blockTimestamp
            blockNumber
          }
          employmentVCIssueds(where: {user: $userAddress}) {
            blockNumber
            blockTimestamp
            id
            transactionHash
            user
          }
          employmentVCVerifieds(
            where: {user: $userAddress}
          ) {
            blockNumber
            blockTimestamp
            id
            reason
            transactionHash
            user
          }
          issuranceVCVerifieds(
            where: {user: $userAddress}
          ) {
            blockNumber
            blockTimestamp
            id
            reason
            transactionHash
            user
          }
          labVCVerifieds (where: {user: $userAddress}){
            blockNumber
            blockTimestamp
            id
            reason
            transactionHash
            user
          }
          nationalVCIssueds(where: {user: $userAddress}) {
            blockNumber
            blockTimestamp
            id
            transactionHash
            user
          }
          nationalVCVerifieds(where: {user: $userAddress}) {
            blockNumber
            blockTimestamp
            id
            reason
            transactionHash
            user
          }
          labVCIssueds(where: {user: $userAddress}) {
            blockNumber
            blockTimestamp
            id
            transactionHash
            user
          }
        }`;

      client
        .query({
          query: gql(query),
          variables: { userAddress: address },
        })
        .then((data) => {
          const finalData = converter(data.data) as any[];
          console.log(finalData);
          const processedTimeLineData = finalData.map((item) => {
            switch (item.title) {
              case "nationalVCVerified":
                return {
                  ...item,
                  message: `National VC Verified for ${item.reason}`,
                  title: "National VC Verified",
                };
              case "labVCVerified":
                return {
                  ...item,
                  message: `Lab VC Verified for : ${item.reason}`,
                  title: "Lab VC Verified",
                };
              case "employmentVCVerified":
                return {
                  ...item,
                  message: `Employment VC Verified for : ${item.reason}`,
                  title: "Employment VC Verified",
                };

              case "labVCIssued":
                return {
                  ...item,
                  message: `Lab VC issued`,
                  title: "Lab VC Issued",
                };
              case "nationalVCIssued":
                return {
                  ...item,
                  message: `National ID issued`,
                  title: "National ID VC Issued",
                };
              case "employmentVCIssued":
                return {
                  ...item,
                  message: `Employment VC ID issued`,
                  title: "Employment VC Issued",
                };
              case "issuranceVCIssued":
                return {
                  ...item,
                  message: `Insurance VC ID issued`,
                  title: "Insurance VC Issued",
                };
              default:
                return item;
            }
          });
          setTimeLineData(processedTimeLineData);

          setLoadingData(true);
        })
        .catch((err) => {
          console.log("Error fetching data: ", err);
        });
    }
  }, [address]);

  return (
    <div className="bg-[#3A3B3B] min-h-[100vh] max-w-[100vw] py-10 ">
      <header>
        <div className="mx-auto max-w-screen-xl py-4">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div
              className="text-center sm:text-left cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              <img
                src="public/images/smartsense-white.png"
                className="h-[70px] w-auto"
                alt="Logo"
              ></img>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <button
                className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
                onClick={() => {
                  navigate("/claim");
                }}
              >
                Claim
              </button>
            </div>
          </div>
        </div>
      </header>
      {loadingData ? (
        <Timeline timelineData={timelineData} />
      ) : (
        <Spinner status="loading" />
      )}
    </div>
  );
};
