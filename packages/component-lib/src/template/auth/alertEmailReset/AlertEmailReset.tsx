"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Loader2 } from "lucide-react";
// import { useRouter } from "next/navigation";
import { useState } from "react";

export function AlertEmailReset({ showAlert } : any) {
    // const { push } = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleContinue = () => {
        setIsLoading(true);
        // push("/login");
    };

    return (
        <AlertDialog open={showAlert}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Senha atualizada com sucesso!</AlertDialogTitle>
                    <AlertDialogDescription>
                        <b>Clique em "Continuar" para ser redirecionado para área de login.</b>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={handleContinue} disabled={isLoading}>
                    {isLoading ? <Loader2 className="animate-spin h-4 w-4 mr-2" /> : null}
                        Continue
                        </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}