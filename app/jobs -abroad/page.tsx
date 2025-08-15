import HeroSearchBar from "@components/job-listing/HeroSearchBar";
import FilterPanel from "@components/job-listing/FilterPanel";
import SortViewToggle from "@components/job-listing/SortViewToggle";
import JobResults from "@components/job-listing/JobResults";
import MapCountrySwitch from "@components/job-listing/MapCountrySwitch";
import PaginationLoadMore from "@components/job-listing/PaginationLoadMore";
import CTAStrip from "@components/job-listing/CTAStrip";

export default function JobsAbroad () {
    return (
        <div className="main w-full min-h-screen flex flex-col items-center bg-gray-50">
            <HeroSearchBar />
            <div className="flex w-full max-w-7xl mx-auto mt-8">
                <FilterPanel />
                <div className="flex-1 flex flex-col">
                    <MapCountrySwitch />
                    <SortViewToggle />
                    <JobResults />
                    <PaginationLoadMore />
                </div>
            </div>
            <CTAStrip />
        </div>
    )
}