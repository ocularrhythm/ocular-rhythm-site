import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import moment from 'moment';


function createHeader(isH1, headerContent) {

    if (isH1) {
        return (
            <h1 className="text-black font-bold m-0 relative z-50 text-2xl md:text-4xl" itemProp="headline">
                {headerContent}
            </h1>
        );
    }

    return (
        <h2 className="text-black font-bold m-0 relative z-50 text-2xl md:text-4xl" itemProp="headline">
            {headerContent}
        </h2>
    );
}

export default function PostTitle({ category, title, date, path, isLink, isH1 = true }) {
    const headerContent = isLink ? (
        <Link className="text-black no-underline" to={path || ''} >
            {title}
        </Link >
    ) : (title);

    return (
        <>
            <div>
                <Link className={`${category.toLowerCase()} label tag-cat`} to={`blog/category/${category}`}>
                    {category}
                </Link>
            </div>

            {createHeader(isH1, headerContent)}

            <time className="pt-2 mt-4 max-w-xs text-base text-grey-darker border-t-1 border-grey-light" itemProp="datePublished" dateTime={moment(date).toISOString()}>
                {moment(date).format('MMMM DD, YYYY')}
            </time>
        </>
    );
}

PostTitle.propTypes = {
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    path: PropTypes.string,
    title: PropTypes.string.isRequired,
    isLink: PropTypes.bool,
    isH1: PropTypes.bool,
};
