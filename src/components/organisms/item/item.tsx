import {
  StyledWrapperList,
  StyledDescription,
  StyledName,
  StyledImage,
  StyledItemLink,
  StyledImageContainer,
  StyledTextContainer,
  StyledButton
} from './styled';

import { ItemInterface } from '../../../types/item';

export type ItemProps = {
  entity: ItemInterface
};

export function Item({entity}: ItemProps) { 
  return (
    <StyledWrapperList>
      <StyledItemLink to={entity._id}>
        <StyledImageContainer>
          <StyledImage>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 64 64">
              <linearGradient id="eBuINbZy_Rv3XeVLNyFQ~a_43591_gr1" x1="32" x2="32" y1="16.501" y2="23.293" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#eBuINbZy_Rv3XeVLNyFQ~a_43591_gr1)" d="M23 20.002L32 17.002 41 20.002 41 20.002 32 23.002z"></path><linearGradient id="eBuINbZy_Rv3XeVLNyFQ~b_43591_gr2" x1="32" x2="32" y1="10.001" y2="55.262" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#eBuINbZy_Rv3XeVLNyFQ~b_43591_gr2)" d="M56.635,21.134l-3.378-1.133l3.378-1.132C57.464,18.591,58,17.844,58,16.967 c0-0.88-0.538-1.628-1.37-1.907l-14.619-4.902c-0.615-0.207-1.294-0.207-1.909,0L32,12.874l-8.101-2.717 c-0.626-0.209-1.285-0.209-1.901-0.002l-7.458,2.501c-3.608,1.21-7.08,2.373-7.172,2.403C6.537,15.34,6,16.089,6,16.969 c0.001,0.876,0.537,1.622,1.367,1.9l3.376,1.132l-3.372,1.131c-0.832,0.278-1.369,1.026-1.369,1.906 c0,0.879,0.537,1.627,1.369,1.905L13,26.831v19.512c0,1.245,0.833,2.342,2.072,2.729l14.724,4.595 c0.711,0.221,1.457,0.332,2.204,0.332s1.493-0.111,2.204-0.332l14.725-4.596C50.167,48.685,51,47.588,51,46.343V26.831l5.629-1.887 C57.462,24.664,58,23.916,58,23.036C58,22.16,57.464,21.412,56.635,21.134z M40.738,12.054c0.205-0.068,0.43-0.068,0.635,0 l14.626,4.919l-5.944,1.993l-15.01-5.003L40.738,12.054z M17.162,20.001L32,15.055l14.838,4.946L32,24.948L17.162,20.001z M8.002,16.957c0.078-0.026,3.558-1.192,7.174-2.405l7.459-2.5c0.1-0.034,0.204-0.051,0.309-0.051c0.106,0,0.214,0.018,0.318,0.053 l5.693,1.909l-15.001,5L8.002,16.957z M13.945,21.037l15.01,5.003l-5.695,1.908c-0.203,0.07-0.428,0.068-0.635,0l-14.619-4.92 L13.945,21.037z M15.669,47.163c-0.4-0.125-0.669-0.455-0.669-0.82v-5.491l16,4.889v6.155c-0.205-0.038-0.41-0.078-0.608-0.14 L15.669,47.163z M48.332,47.162l-14.724,4.595c-0.199,0.062-0.404,0.101-0.608,0.14v-6.155l16-4.889v5.491 C49,46.708,48.731,47.038,48.332,47.162z M49,38.762L33,43.65V32h-2v11.65l-16-4.888v-11.26l6.99,2.344 C22.299,29.949,22.622,30,22.945,30s0.646-0.052,0.952-0.155L32,27.129l8.102,2.716c0.617,0.207,1.294,0.207,1.907,0L49,27.501 V38.762z M41.372,27.949c-0.203,0.07-0.428,0.068-0.635,0l-5.693-1.908l15.001-5l5.949,2.007L41.372,27.949z"></path>
            </svg>
          </StyledImage>
        </StyledImageContainer>
        <StyledTextContainer>
          <StyledName>{entity.name}</StyledName>
          <StyledDescription>{entity?.description}</StyledDescription>
        </StyledTextContainer>
      </StyledItemLink>
      <StyledButton>
        <svg className="fill-current" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5326 16.0338C12.5326 15.1133 11.7864 14.3671 10.8659 14.3671C9.94541 14.3671 9.19922 15.1133 9.19922 16.0338C9.19922 16.9542 9.94541 17.7004 10.8659 17.7004C11.7864 17.7004 12.5326 16.9542 12.5326 16.0338Z" fill=""></path>
          <path d="M12.5326 10.2005C12.5326 9.28005 11.7864 8.53385 10.8659 8.53385C9.94541 8.53385 9.19922 9.28005 9.19922 10.2005C9.19922 11.121 9.94541 11.8672 10.8659 11.8672C11.7864 11.8672 12.5326 11.121 12.5326 10.2005Z" fill=""></path>
          <path d="M12.5326 4.36702C12.5326 3.44655 11.7864 2.70036 10.8659 2.70036C9.94541 2.70036 9.19922 3.44655 9.19922 4.36703C9.19922 5.2875 9.94541 6.03369 10.8659 6.03369C11.7864 6.03369 12.5326 5.2875 12.5326 4.36702Z" fill=""></path>
        </svg>
      </StyledButton>
    </StyledWrapperList>
  )
}
