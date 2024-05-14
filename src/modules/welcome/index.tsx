import WorkspaceCard from "../components/workspace";

const Welcome = async () => {
    return (<>
        <WorkspaceCard type={"private"} />
        <WorkspaceCard type={"public"} />
    </>
    );
};

export default Welcome;
