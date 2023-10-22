"use client";

import {useEffect, useState} from "react";
import {ProModal} from "@/components/pro-modal";

export const ModalProvider = () => {
    const [isMointed, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMointed) {
        return null;
    };

    return (
        <>
            <ProModal />
        </>
    )
}