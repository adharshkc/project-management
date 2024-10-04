import {create} from "zustand"

interface IProjectStore {
    projectModal:boolean;
    setProjectModal:(bool:boolean)=>void
    isAddProject:boolean;
    setIsAddProject:(bool:boolean)=>void
}

export const useProjectStore = create<IProjectStore>((set)=>({
    projectModal:false,
    isAddProject:false,
    setProjectModal:(bool)=>set({projectModal:bool}),
    setIsAddProject:(bool)=>set({isAddProject:bool})
}))
