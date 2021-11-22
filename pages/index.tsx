import { Box, Flex, H1, H4, Panel, Button } from '@bigcommerce/big-design';
import styled from 'styled-components';
import axios from 'axios';
import ErrorMessage from '../components/error';
import Loading from '../components/loading';
import { useProducts, AddScriptsFun } from '../lib/hooks';

const Index = () => {
    const { error, isLoading, summary } = useProducts();

    if (isLoading) return <Loading />;
    if (error) return <ErrorMessage error={error} />;

    const AddScriptTag = async() => {
        var data = JSON.stringify({ "name": "Bootstrap", "description": "Build responsive websites", "src": "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js", "auto_uninstall": true, "load_method": "default", "location": "footer", "visibility": "all_pages", "kind": "src", "consent_category": "essential" }); var xhr = new XMLHttpRequest(); xhr.withCredentials = true; xhr.addEventListener("readystatechange", function () { if (this.readyState === this.DONE) { console.log(this.responseText); } }); xhr.open("POST", "https://api.bigcommerce.com/stores/jwt03jvujb/v3/content/scripts"); xhr.setRequestHeader("accept", "application/json"); xhr.setRequestHeader("content-type", "application/json"); xhr.setRequestHeader("x-auth-token", "tw4hd9wrw1qmmrl1kinxt1f7j4ktsif"); xhr.send(data);
    };

    return (
        <Panel header="Homepage">
            <Flex>
                <StyledBox border="box" borderRadius="normal" marginRight="xLarge" padding="medium">
                    <H4>Inventory count</H4>
                    <H1 marginBottom="none">{summary.inventory_count}</H1>
                </StyledBox>
                <StyledBox border="box" borderRadius="normal" marginRight="xLarge" padding="medium">
                    <H4>Variant count</H4>
                    <H1 marginBottom="none">{summary.variant_count}</H1>
                </StyledBox>
                <StyledBox border="box" borderRadius="normal" padding="medium">
                    <H4>Primary category</H4>
                    {/* <H1 marginBottom="none">{summary.primary_category_name}</H1> */}
                </StyledBox>
                <StyledBox border="box" borderRadius="normal" padding="medium">
                    <H4>Add ScriptTag</H4>
                    <Button actionType="normal" isLoading={false} variant="primary" 
                    onClick={AddScriptTag}
                    >
                        Add Script Tag
                    </Button>
                </StyledBox>
            </Flex>
        </Panel>
    );
};

const StyledBox = styled(Box)`
    min-width: 10rem;
`;

export default Index;
