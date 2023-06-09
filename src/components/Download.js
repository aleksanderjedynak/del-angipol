import { PaperClipIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

//todo: dodanie ograniczenia jesli ktos nie ma kupionego biletu oraz kontakt do organizatora
export default function Download() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <div className="px-4 sm:px-0">
          <p className="text-base font-semibold leading-7 mb-4 text-indigo-600">
            <Link
              to="/tcm-kongres"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Powrót do strony głównej
            </Link>
          </p>
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Pliki do pobrania
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Na tej stronie znajdziesz wszystkie pliki do pobrania związane z
            naszymi wydarzeniami.
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                About
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Opis wydarzenia oraz pozostałe informacje.
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Attachments
              </dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul
                  role="list"
                  className="divide-y divide-gray-100 rounded-md border border-gray-200"
                >
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">
                          TCM_Kongres_Krakow_PL.pdf vol.2019
                        </span>
                        <span className="flex-shrink-0 text-gray-400">
                          10.6 mb
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="https://tcm-kongres.pl/download/TCM_Kongres_Krakow_PL.pdf"
                        download="TCM_Kongres_Krakow_PL.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
