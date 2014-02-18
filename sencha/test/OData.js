/*ff5daba20f90e301ecb1274081f6fd78dcaeee05*/Ext.define("Ext.data.proxy.OData",{extend:"Ext.data.proxy.Rest",alias:"proxy.odata",requires:["Ext.XTemplate","Ext.data.reader.Xml","Ext.data.writer.Xml","Ext.data.Connection"],statics:{connection:Ext.create("Ext.data.Connection")},config:{startParam:"$skip",limitParam:"$top",groupParam:null,pageParam:null,format:"xml",useHeaderAuthentication:false,xmlDocumentTpl:['<?xml version="1.0" encoding="utf-8"?>\n',"<atom:entry \n",'            xmlns:atom="http://www.w3.org/2005/Atom"\n','            xmlns:d="http://schemas.microsoft.com/ado/2007/08/dataservices"\n','            xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata"\n','            xmlns:sap="http://www.sap.com/Protocols/SAPData">\n','    <atom:content type="application/xml">\n',"        <m:properties>",'          <tpl for=".">\n','           <tpl if="value === null">','            <d:{key} m:null="true"/>',"           <tpl else>","            <d:{key}>{value}</d:{key}>","           </tpl>","          </tpl>\n","        </m:properties>\n","    </atom:content>\n","</atom:entry>\n"],enablePagingParams:true,timeout:30000,extraParams:{},headers:{},actionMethods:{create:"POST",read:"GET",update:"PUT",destroy:"DELETE"},reader:{type:"xml",implicitIncludes:false,record:"entry"},writer:{type:"xml"},noCache:false,appendId:false},applyXmlDocumentTpl:function(b){if(b&&!b.isTemplate){return Ext.create("Ext.XTemplate",b)}return b},prepareXmlData:function(v){var m=this.getWriter(),l=v.getOperation(),n=l.getRecords()||[],o=this.getXmlDocumentTpl(),s=l.getModel(),p=s.getIdProperty(),r=[],u,t,q;if(n.length){u=m.getRecordData(n[0])}if(u){for(q in u){if(q!==p&&u.hasOwnProperty(q)){r.push({key:q,value:u[q]})}}t=o.apply(r)}return t},doRequest:function(t,n,m){var p=this,k=t.getAction(),r=p.getUsername(),o=p.getPassword(),s=p.buildRequest(t),l=Ext.applyIf({},p.getHeaders()),q=p.self.connection.getDefaultHeaders()||{};s.setConfig({headers:l,timeout:p.getTimeout(),method:p.getMethod(s),callback:p.createRequestCallback(s,t,n,m),scope:p,proxy:p});if((t.getWithCredentials()||p.getWithCredentials())&&!Ext.isEmpty(r)){if(this.getUseHeaderAuthentication()){l.Authorization="Basic "+window.btoa(r+":"+o)}else{s.setWithCredentials(true);s.setUsername(r);s.setPassword(o)}}if(!q["x-csrf-token"]){l["x-csrf-token"]="Fetch"}if(k==="create"||k==="update"){l["Content-Type"]="application/atom+xml";s.setXmlData(this.prepareXmlData(s))}if(k==="destroy"||k==="update"){l["If-Match"]="*"}p.self.connection.request(s.getCurrentConfig());return s},buildUrl:function(h){var i=this,k=h.getOperation().getRecords()||[],l=k[0],j=i.getModel().getIdProperty(),n=h.getParams()||{},m=(l&&!l.phantom)?l.getId():n[j];delete n[j];return m||i.getUrl(h)},processResponse:function(k,q,o,p,l,j){var m=this,r=q.getAction(),n=m.self.connection.getDefaultHeaders()||{};if(r==="read"){if(!n["x-csrf-token"]){n["x-csrf-token"]=p.getResponseHeader("x-csrf-token");m.self.connection.setDefaultHeaders(n)}this.callParent(arguments)}else{if(r==="create"){this.callParent(arguments)}else{q.setCompleted(true);if(p.status!==204){q.setSuccessful(false);q.setException(p.statusText);m.fireEvent("exception",this,p,q)}if(typeof l=="function"){l.call(j||m,q)}}}}});