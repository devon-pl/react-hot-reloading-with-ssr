const React = require('react');


var Sample = React.createClass({

    render: function() {
        return (
            <div>
                <h1>React Sample Boilerplate for SSR and Hot Reloading</h1>
                <h4>This boilerplate contains Server side rendering with hot reloading enabled</h4>
                <div> Edit some text in src/components/Sample.js</div>

                <div>There are two routes <a href="http://localhost:3001/ssr">SSR Page</a> and <a href="http://localhost:3001/normal" >Normal Page</a>

                    <p>- SSR - This Page is rendered from server using express and renderToString and markup is embedded in client. You can viewpage source of this page and check the markup </p>
                    <p>- Normal - This page is not having any SSR enabled. So it loads as normal reaact page. You compare the page source of this page and ssr page</p>
                </div>
            </div>
        );
    }
});

module.exports = Sample;
