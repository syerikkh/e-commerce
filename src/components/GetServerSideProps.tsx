import React from 'react'
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { Articles } from '@/types/Articles';

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await axios.get("https://dev.to/api/articles");
    const initialData: Articles[] = res.data;
    return {
        props: {
            initialData
        }
    }
}