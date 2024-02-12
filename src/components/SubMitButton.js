import React from 'react'
import Button from './Button'
import { useNavigation } from 'react-router-dom'
const SubMitButton = ({ title, className, message }) => {
    const navigation = useNavigation()
    const isSubmitting = navigation.state == "submitting"
    return (
        <Button
            disabled={isSubmitting}
            type="sumbit"
            title={isSubmitting ? (message || "please wait... ") : title}
            className={className}
        />
    )
}

export default SubMitButton