import React, { Fragment } from 'react';

const Navbar = props => {
  return (
    <Fragment>
      <nav
        className='navbar is-info'
        role='navigation'
        aria-label='main navigation'
      >
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            <img
              src='https://bulma.io/images/bulma-logo.png'
              width='112'
              height='28'
            />
          </a>

          <a
            role='button'
            className='navbar-burger burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>

        <div id='navbarBasicExample' class='navbar-menu'>
          <div className='navbar-start'>
            <a className='navbar-item' href='/aim/'>
              <i
                className='fas fa-rocket'
                style={{ paddingRight: '7px', color: 'red' }}
              />
              Aim
            </a>
            <a className='navbar-item' href='/overview/'>
              <i
                className='fas fa-rss'
                style={{ paddingRight: '7px', color: 'orange' }}
              />
              Overview
            </a>
            <a className='navbar-item' href='/contact/'>
              <i
                className='far fa-address-book'
                style={{ paddingRight: '7px', color: 'white' }}
              />
              Contact
            </a>
            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link'>More</a>

              <div className='navbar-dropdown'>
                <a className='navbar-item' href='/why-learn-another-language/'>
                  <i
                    className='fas fa-globe-europe'
                    style={{ paddingRight: '7px', color: 'blue' }}
                  />
                  Why Learn Another Language
                </a>
                <a className='navbar-item' href='/download-beginners-guide/'>
                  <i
                    className='far fa-file-pdf'
                    style={{ paddingRight: '11.5px', color: 'red' }}
                  />
                  Download Our Beginner's Guide
                </a>
                <hr className='navbar-divider' />
                <a className='navbar-item' href='/report-an-issue/'>
                  <i
                    className='fas fa-bug'
                    style={{ paddingRight: '7px', color: 'brown' }}
                  />
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <a className='button is-primary'>
                  <strong>Sign up</strong>
                </a>
                <a className='button is-light'>Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
