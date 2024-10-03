import {create} from "zustand"

interface IProjectStore {
    projectModal:boolean;
    setProjectModal:(bool:boolean)=>void
}

export const useProjectStore = create<IProjectStore>((set)=>({
    projectModal:false,
    setProjectModal:(bool)=>set({projectModal:bool})
}))
