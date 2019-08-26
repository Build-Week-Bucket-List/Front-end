import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {action} from "../../actions"

const BucketList = _ =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    return (
        <>
            Bucket!
        </>
    )
}

export default BucketList