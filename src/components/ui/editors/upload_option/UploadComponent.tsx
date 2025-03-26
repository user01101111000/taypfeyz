import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog.tsx"
import {Upload} from "lucide-react";
import React from "react";
import UploadContentURL from "@/components/ui/editors/upload_option/UploadContentURL.tsx";
import UploadContentFile from "@/components/ui/editors/upload_option/UploadContentFile.tsx";

const UploadComponent: () => React.JSX.Element = (): React.JSX.Element => {

    const [open, setOpen] = React.useState<boolean>(false);

    return <Dialog open={open} onOpenChange={(): void => {
        setOpen((p: boolean): boolean => !p);
    }}>
        <DialogTrigger>
            <Upload aria-label="copy button" className="h-4 w-4 cursor-pointer"/>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Upload your JSON content</DialogTitle>
                <DialogDescription asChild>
                    <div className="flex flex-col gap-4 my-4">

                        <UploadContentURL setOpen={setOpen}/>

                        <div className="flex items-center justify-center gap-2">
                            <hr className="border-gray-700 flex-1/2"/>
                            <p className="font-bold text-white">or</p>
                            <hr className="border-gray-700 flex-1/2"/>
                        </div>


                        <UploadContentFile/>

                    </div>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
};

export default UploadComponent;