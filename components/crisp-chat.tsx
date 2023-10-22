"use client";

import {useEffect } from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("4b4c1afa-e8f8-4ae5-9c46-c4e871936e75")
    }, []);

    return null;
}