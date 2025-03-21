import ProfilePageSkeleton from "./ProfilePageSkeleton"

function ProfilePage() {
    return (
        <div className=" homepage p-4 gap-3" style={{ height: "calc(100vh - 3rem)" }} >
            <ProfilePageSkeleton/>
        </div>
    )
}

export default ProfilePage