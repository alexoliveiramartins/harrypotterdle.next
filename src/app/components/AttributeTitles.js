
export default function AttributeTitles({character}){


    return(
        <div className="font-medium text-white object-center px-2 items-center grid grid-cols-9 gap-4 w-full min-w-max">
            <label className="p-1 w-20 justify-center items-center flex text-sm">Character</label>
            <label className="p-1 w-20 justify-center items-center flex text-sm">Gender</label>
            <label className="p-1 w-20 justify-center items-center flex text-sm">Boggart</label>
            <label className="p-1 w-20 justify-center items-center flex text-sm">Blood</label>
            <label className="p-1 w-20 justify-center items-center flex text-sm">Born</label>
            <label className="p-1 w-20 justify-center items-center flex text-sm">House</label>
            <label className="p-1 w-20 justify-center items-center flex text-sm">Species</label>
            <label className="p-1 w-20 justify-center items-center flex text-sm">Patronus</label>
            <label className="p-1 w-20 justify-center items-center flex text-sm">First Appearance</label>
        </div>
    );
}