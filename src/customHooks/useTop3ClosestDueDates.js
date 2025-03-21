import { useState, useEffect, useMemo } from 'react';

function useTop3ClosestDueDates(projects) {
    const [top3Projects, setTop3Projects] = useState([]);

    // Ensure projects is stable to prevent unnecessary re-renders
    const stableProjects = useMemo(() => projects, [JSON.stringify(projects)]); 

    useEffect(() => {
        if (!stableProjects || stableProjects.length === 0) return;

        const today = new Date();

        const filteredProjects = stableProjects
            .map((project) => ({
                ...project,
                dueDateDifference: Math.abs(new Date(project.due_date) - today),
            }))
            .sort((a, b) => a.dueDateDifference - b.dueDateDifference)
            .slice(0, 3);

        setTop3Projects(filteredProjects);
    }, [stableProjects]); // Use stableProjects instead of projects

    return top3Projects;
}

export default useTop3ClosestDueDates;
