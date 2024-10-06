import {create} from "zustand"

interface IProjectStore {
    projectModal:boolean;
    deleteModal:boolean;
    setDeleteModal:(bool:boolean)=>void;
    setProjectModal:(bool:boolean)=>void
    isAddProject:boolean;
    setIsAddProject:(bool:boolean)=>void
}

export const useProjectStore = create<IProjectStore>((set)=>({
    projectModal:false,
    isAddProject:false,
    deleteModal:false,
    setDeleteModal:(bool)=>set({deleteModal:bool}),
    setProjectModal:(bool)=>set({projectModal:bool}),
    setIsAddProject:(bool)=>set({isAddProject:bool})
}))
