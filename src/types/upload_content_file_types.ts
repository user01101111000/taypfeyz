import React from "react";

export type UploadInputs = {
    JSONFile: FileList
};

export type UploadContentFileProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
};