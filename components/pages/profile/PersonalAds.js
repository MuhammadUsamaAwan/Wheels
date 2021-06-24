import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersonalAds } from "../../../redux/actions/profile";
import LoadingIcon from "../../UI/LoadingIcon";
import { Table, Input, Button, Space  } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const PersonalAds = () => {
    const [state, setState] = useState({
        searchText: '',
        searchedColumn: '',
      })
    const dispatch = useDispatch()
    const personalAds = useSelector(state => state.personalAds);
    const token = useSelector(state => state.auth.token);
    useEffect(() => {
        dispatch(getPersonalAds(token));
    }, [dispatch, token])
    if (personalAds.isLoading)
    return (
        <LoadingIcon />
    )
    
    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ marginBottom: 8, display: 'block' }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
              >
                Search
              </Button>
              <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                Reset
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  confirm({ closeDropdown: false });
                  setState({
                    searchText: selectedKeys[0],
                    searchedColumn: dataIndex,
                  });
                }}
              >
                Filter
              </Button>
            </Space>
          </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
          record[dataIndex]
            ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
            : '',
        render: text =>
          state.searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords={[state.searchText]}
              autoEscape
              textToHighlight={text ? text.toString() : ''}
            />
          ) : (
            text
          ),
      });
    
      const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setState({
          searchText: selectedKeys[0],
          searchedColumn: dataIndex,
        });
      };
    
      const handleReset = clearFilters => {
        clearFilters();
        setState({ searchText: '' });
      };

    const dataSource = [
      {
        key: personalAds.result._id,
        title: personalAds.result.title,
        model: personalAds.result.modelYear,
        city: personalAds.result.city,
        vehicleType: personalAds.result.vehicleType,
        price: `${personalAds.result.price/100000} lacs`
      }
    ]
    const columns = [
        {
            title: "Title",
            dataIndex: 'title',
            key: 'title',
            sorter: {
                compare: (a, b) => a.title.localeCompare(b.title),
                multiple: 1
            },
            ...getColumnSearchProps('title'),
        },
        {
            title: "Model",
            dataIndex: 'model',
            key: 'model',
            sorter: {
                compare: (a, b) => a.model - b.model,
                multiple: 2
            },
            ...getColumnSearchProps('model'),
        },
        {
            title: "City",
            dataIndex: 'city',
            key: 'city',
            sorter: {
                compare: (a, b) => a.city.localeCompare(b.city),
                multiple: 3
            },
            ...getColumnSearchProps('city'),
        },
        {
            title: "Vehicle Type",
            dataIndex: 'vehicleType',
            key: 'vehicleType',
            sorter: {
                compare: (a, b) => a.vehicleType.localeCompare(b.vehicleType),
                multiple: 4
            },
            ...getColumnSearchProps('vehicleType'),
        },
        {
            title: "Price",
            dataIndex: 'price',
            key: 'price',
            sorter: {
                compare: (a, b) => a.price.localeCompare(b.price),
                multiple: 4
            },
        },
        {
            title: "Actions",
            key: 'action',
            render: (record) => (
                <a href={`/${record.vehicleType}/${record.key}`}>View</a>
            ),
        }
    ]
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}

export default PersonalAds
