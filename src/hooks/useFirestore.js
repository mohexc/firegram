import React, { useEffect, useState } from 'react'
import { db } from '../configs/firebase'

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([])

    useEffect(() => {
        const unsub = db
            .collection(collection)
            .onSnapshot("createdAt")
            .onSnapshot((snap) => {
                let documents = []
                snap.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id })
                })
                setDocs(documents)
            })

        return () => unsub()
    }, [collection])

    return { docs }
}

export default useFirestore

