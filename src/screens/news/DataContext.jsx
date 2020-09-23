import React, { Component } from "react";

// Import data
import { Items, itemDetails } from "./Data.jsx";

const contentful = require("contentful");
const client = contentful.createClient({
  space: "rxf4wd4589i9",
  accessToken: "_zwhx9di4BXfk-m_F4b-it-eG-Vhx37R6QUv5oN1wyQ",
});

const Data = () => {
  const [posts, setPosts] = useState([]);

  // All  entries
  useEffect(() => {
    client
      .getEntries()
      .then((response) => setPosts(response.items))
      .catch(console.error);
  }, []);

  console.log(posts);
  //console.log(post);

  return <div></div>;
};

// Create context
const DataContext = React.createContext();

// Provider
class ContextProvider extends Component {
  state = {
    items: [],
    itemDetails: itemDetails,
    bag: [],
    subTotal: 0,
    tax: 0,
    total: 0,
  };

  // Create a deep copy of data array
  setItems = () => {
    let itemsCopy = [];
    itemsCopy = JSON.parse(JSON.stringify(Items));
    this.setState(() => {
      return { items: itemsCopy };
    });
  };

  componentDidMount() {
    this.setItems();
  }

  getItem = (id) => {
    const item = this.state.items.find((item) => item.id === id);
    return item;
  };

  viewDetail = (id) => {
    const item = this.getItem(id);
    this.setState(() => {
      return { itemDetails: item };
    });
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          viewDetail: this.viewDetail,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

// Consumer
const ContextConsumer = DataContext.Consumer;

export { ContextProvider, ContextConsumer };
