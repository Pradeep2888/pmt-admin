import UserProfilePageSkeleton from "./UserProfilePageSkeleton"

function UserProfilePage() {
    return (
        <div className=" homepage p-4 gap-3" style={{ height: "calc(100vh - 3rem)" }} >
            <UserProfilePageSkeleton/>
        </div>
    )
}

export default UserProfilePage