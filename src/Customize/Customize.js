import React from 'react';
import Feature from '../Feature/Feature';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import USCurrencyFormat from '../Currency/Currency';

class Customize extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                <div key={itemHash} className="feature__item">
                  <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === this.props.selected[feature].name}
                    onChange={e => this.props.updateFeature(feature, item)}
                  />
                  <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)})
                  </label>
                </div>
              );
            });
      
            return (
                <Feature featureHash={featureHash} feature={feature} options={options}/>
            );
          });

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
}

export default Customize;