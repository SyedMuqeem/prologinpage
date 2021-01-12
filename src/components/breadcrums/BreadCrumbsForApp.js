import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const BreadCrumbsForApp = () => {
    return (
        <div className="breadbgclr">
            <Breadcrumb >
                <BreadcrumbItem><a href="#">Water Management</a></BreadcrumbItem>
                <BreadcrumbItem active>Building Info</BreadcrumbItem>
            </Breadcrumb>
        </div>
    )
}

export default BreadCrumbsForApp;
